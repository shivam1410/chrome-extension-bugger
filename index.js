

//step-0
//getting owner and repo name from url
var res = window.location.pathname.split("/")
const owner = res[1];
const repo = res[2];
var tab = res[3];
// Inform the background page that 
// this tab should have a page-action.
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
});
  
// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.action === 'githubAuth' && tab === 'issues') {
      this.authFunction();
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // listen for messages sent from background.js
    if (request.message === 'urlChanged') {
        var temp = request.url.split("/")
        tab = temp[5];
    }
});

//allow chrome for content script
chrome.runtime.sendMessage({todo: "showPageAction"}, function(res) {
});

//complete Document Dom
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';
//
//
//step 1
//Authentication
async function authFunction() {

    scope = "repo"
    const codeurl = `https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}&scope=${scope}&redirect_uri=${config.redirect_uri}`
    window.open(codeurl)
    var authCode;
    
    chrome.storage.onChanged.addListener(function (result, store) {
    if(result.code && tab === 'issues' && (authCode !=result.code.newValue)) {
            authCode = result.code.newValue;
            githubAutherizationToken(authCode) 
        }
    })
}

async function githubAutherizationToken(authCode) {

        authurl= `https://github.com/login/oauth/access_token?client_id=${config.CLIENT_ID}&client_secret=${config.Client_Secret}&code=${authCode}`

        headers = {
            Accept: "application/json"
        }
        const authResponse = await fetch( authurl , {
            method: "post",
            body: `client_id=${config.CLIENT_ID}&client_secret=${config.Client_Secret}&code=${authCode}`,
            headers: headers
        })
        const result = await authResponse.json();
        
        if(result.access_token ){
            getIssues(result.access_token);
        }   

}
//
//
//step- 2
var tempResult;

async function getIssues(access_token) {


    //remove dom .. to avid duplicacy
    $("#labels-main").remove();
    $("#assignees-main").remove();
//
//
//
//step-2 - (i)
//DOM creation
    const showLabelHref= `https://github.com/${owner}/${repo}/labels`
    const div1 = `<div id='labels-main' class='labels-main' ><div id='label-header' class='label-header'><a class='label-heading-text' href=${showLabelHref}>Labels</a>:&nbsp;&nbsp;</div><div id='labels-child'></div></div>`;
    const div1css = { 
        "margin" : "55px 0px 25px 0",
        "width": "100%",
        "min-height":"130px",
        "height": "fit-content",    
        "border-radius": "3px",
        "overflow-x":"hidden",
        "border": "1px solid #d1d5da"
    } 
    const div2 = "<div id='assignees-main' ><div id='assignee-header' class='assignee-header'><div>Assignees</div>:&nbsp;&nbsp;</div><div id='assignees-child'></div></div>";
    const div2css = {
        'width': "100%",
        "min-height":"130px",
        "height": "fit-content",
        "border-radius": "3px",
        "overflow-x":"hidden",
        "border": "1px solid #d1d5da"    
    }
    
    $(".subnav").append(div1)
    $(".subnav").append(div2)
    $('.labels-main').css(div1css)
    $('.label-header').css({
        "display": "flex",
        "width": "102%",
        "font-size": "15px",
        "font-weight": "600",
        "padding": "10px",
        "margin": "-1px 1px 0px -1px",
        "border-top-left-radius": "3px",
        "border-top-right-radius": "3px",
        "border": "1px solid #d1d5da",
        "background-color": "#f6f8fa"
    })
    $('.assignee-header').css({
        "display": "flex",
        "width": "102%",
        "font-size": "15px",
        "font-weight": "600",
        "padding": "10px",    
        "margin": "-1px 1px 0px -1px",
        "border-top-left-radius": "3px",
        "border-top-right-radius": "3px",
        "background-color": "#f6f8fa",
        "border": "1px solid #d1d5da"
    })
    $('.label-heading-text').css({
        "color": "#24292e",
        "font-weight": "600",
        "text-decoration": "none",
    })
    $('#labels-child').css({
        "display" : "flex",
        "flex-wrap": "wrap",
        "padding":"5px 16px 5px 16px",
        "overflow-y":"auto",
        "justify-content":"space-around"
    })
    $('#assignees-main').css(div2css)
    $('#assignees-child').css({
        "display" : "flex",
        "flex-wrap": "wrap",
        "padding":"5px 16px 5px 16px",        
        "overflow-y":"auto",
        "justify-content":"space-around"
    })
//
//
//
//
//Gihub Issues api call for data that we needed
    const headers = {
        "Authorization" : `token ${access_token}`
    }

    const repoUrl =  `https://api.github.com/repos/${owner}/${repo}`;
    const repoResponse = await fetch(repoUrl,{
        "method" : "get",
        "headers": headers
    });
    const repoResult = await repoResponse.json();

    issues_count = repoResult.open_issues_count;
    
    var allIssues = [];
    for (issues = 0,page=1;issues<=issues_count;issues +=100,page+=1) {
        const issuesUrl = `https://api.github.com/repos/${owner}/${repo}/issues?page=${page}&per_page=100`
        const issuesResponse = await fetch(issuesUrl,{
            "method": "GET",
            "headers": headers
        });
        const result = await issuesResponse.json();
        if(!result.message ){
            allIssues.push(...result)
        }
    }

    //labels-DOM
    var allLabels = [];
    const colorObject = {};
    allIssues.forEach(ele => {
        if(ele.labels.length) {
            ele.labels.forEach(element => {
                allLabels.push({name: element.name ,color: element.color})
                colorObject[element.name]= element.color;
            })
        }
    });
    var labelsCountObject = {};
    var labelsArray = [];
    allLabels.forEach(i => { labelsCountObject[i['name']] = (labelsCountObject[i['name']] || 0) + 1; });

    Object.keys(labelsCountObject).forEach(key => {
        labelsArray.push({
            label: key, count: labelsCountObject[key], color: colorObject[key]
        })
    })
    labelsArray.sort(function(a, b){
        var x = a.count;
        var y = b.count;
        if (x < y) {return 1;}
        if (x > y) {return -1;}
        return 0;
      });
    if(labelsArray.length === 0) {
        $('#noIssues').remove();
        $('#labels-1').remove();
        $('#labelArrayLength').remove();
        $('#label-header').append(`<div id="labelArrayLength">${labelsArray.length}</div>`)
        message = "NO labels have been assigned!"
        $('#labels-child').append(`<div id="noIssues" class="noIssues"></div>`)
        $('.noIssues').css({
            "width" : "100%",
            "text-align": "center"
        })
        $('#noIssues').append(`<svg height="35" class="octicon octicon-issue-opened blankslate-icon" viewBox="0 0 14 16" version="1.1" width="35" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg><div class="message">${message}</div>`)
        $('.message').css({
            "font-size": "18px",
            "font-weight": "600"
        })
    }

    else {
        $('#noIssues').remove();
        $('#labels-1').remove();
        $('#labelArrayLength').remove();
        $('#label-header').append(`<div id="labelArrayLength">${labelsArray.length}</div>`)
        labelsArray.forEach(i => {

            myclass = {
                "display" : "flex",
                "width"   : "25%",
                "height"  : "fit-content",
                "margin-bottom": "3px"
            }
            //color correction : fontcolor vs background color issue
            let r= parseInt(i.color.substring(0,2),16);
            let g= parseInt(i.color.substring(2,4),16);
            let b= parseInt(i.color.substring(4,6),16);
    
            let illumination = ( 0.299*r + 0.587*g + 0.114*b)/255;
    
            labelHref= `https://github.com/${owner}/${repo}/issues?q=is:issue+is:open+label:"${i.label}"`
    
            if(illumination > 0.5) {
                $('#labels-child').append(`<div id="labels-1" class='labels-1' ><a href='${labelHref}' class='label-name' style='background-color: #${i.color};color:#000000;'>${i.label}</a><div class='label-count'>&nbsp;:  ${i.count}</div></div>`)
            }
            else {
                $('#labels-child').append(`<div id="labels-1" class='labels-1' ><a href='${labelHref}' class='label-name' style='background-color: #${i.color};color:#ffffff;'>${i.label}</a><div class='label-count'>&nbsp;:  ${i.count}</div></div>`)
            }
            $(`.labels-1`).css(myclass)
            $('.label-name').css({
                "min-width":"50px",
                "max-width":"150px",
                "font-weight": "bold",
                "border-radius": "2px",
                "padding": "2px 5px",
                "box-shadow": "inset 0 -1px 0 rgba(27,31,35,.12)",
                "text-decoration" : "none",
    
            })
        })
        $('.label-count').css({
            "font-weight": "600"
        })
        $('#labels-child').append("<span style='width: 25%' ></span>")
        $('#labels-child').append("<span style='width: 25%' ></span>")
        $('#labels-child').append("<span style='width: 25%' ></span>")
    }

    //assignees//count
    var longAssigneesArray = [];
    allIssues.forEach(ele => {
        if(ele.assignees.length) {
            ele.assignees.forEach(element => {
                longAssigneesArray.push(element.login)
            })
        }
    });
    var AssigneesObject = {};
    var AssigneesArray = [];
    longAssigneesArray.forEach(i => { AssigneesObject[i] = (AssigneesObject[i] || 0) + 1; });

    Object.keys(AssigneesObject).forEach(key => {
        AssigneesArray.push({
            label: key, count: AssigneesObject[key]
        })
    })

    AssigneesArray.sort(function(a, b){
        var x = a.label.toLowerCase();
        var y = b.label.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      
    if(AssigneesArray.length === 0) {

        $('#assigneenoIssues').remove();
        $('#assignees-1').remove();
        $('#assigneeArrayLength').remove();
        $('#assignee-header').append(`<div id="assigneeArrayLength">${AssigneesArray.length}</div>`)
        assigneemessage = "NO issue is assigned to anyone!"
        $('#assignees-child').append(`<div id="assigneenoIssues" class="assigneenoIssues"></div>`)
        $('.assigneenoIssues').css({
            "width" : "100%",
            "text-align": "center"
        })
        $('#assigneenoIssues').append(`<svg height="35" class="octicon octicon-issue-opened blankslate-icon" viewBox="0 0 14 16" version="1.1" width="35" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg><div class="assigneemessage">${assigneemessage}</div>`)
        $('.assigneemessage').css({
            "font-size": "18px",
            "font-weight": "600"
        })
    }
    else {
        $('#assigneenoIssues').remove();
        $('#assignees-1').remove();
        $('#assigneeArrayLength').remove();
        $('#assignee-header').append(`<div id="assigneeArrayLength">${AssigneesArray.length}</div>`)

        AssigneesArray.forEach(i=> {

            myclass = {
                "display" : "flex",
                "width"   : "25%",
            }
            assigneeHref = `https://github.com/${owner}/${repo}/issues?q=assignee:${i.label}+is:open`
            $('#assignees-child').append(`<div  class='assignees-1' ><a href='${assigneeHref}' class='assignee-name'>${i.label}</a><div class='assignee-count'>:  ${i.count}</div></div>`)
            $('.assignees-1').css(myclass)
            $('.assignee-name').css({
                "min-width": "100px",
                "max-width": "150px",
                "color": "black",
                "font-weight": "600",
                "text-decoration": "none",
               "box-shadow": "rgba(27, 31, 35, 0.12) 0px -1px 0px inset",
                "padding": "2px 5px",
            })
    
            $('.assignee-count').css({"width":"25"})
    
        })
        $('.assignee-count').css({
            "font-weight": "600"
        })
        $('#assignees-child').append("<span style='width: 25%' ></span>")
        $('#assignees-child').append("<span style='width: 25%' ></span>")
        $('#assignees-child').append("<span style='width: 25%' ></span>")
    }
}
