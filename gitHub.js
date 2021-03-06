!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.GitHub=e()}}(function(){return function(){function e(t,r,n){function u(o,i){if(!r[o]){if(!t[o]){var a="function"==typeof require&&require;if(!i&&a)return a(o,!0);if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var c=r[o]={exports:{}};t[o][0].call(c.exports,function(e){return u(t[o][1][e]||e)},c,c.exports,e,t,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)u(n[o]);return u}return e}()({1:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=e("./Requestable"),a=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function(e){function t(e,r,s){n(this,t);var o=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r,s));return o.__id=e,o}return s(t,e),o(t,[{key:"read",value:function(e){return this._request("GET","/gists/"+this.__id,null,e)}},{key:"create",value:function(e,t){var r=this;return this._request("POST","/gists",e,t).then(function(e){return r.__id=e.data.id,e})}},{key:"delete",value:function(e){return this._request("DELETE","/gists/"+this.__id,null,e)}},{key:"fork",value:function(e){return this._request("POST","/gists/"+this.__id+"/forks",null,e)}},{key:"update",value:function(e,t){return this._request("PATCH","/gists/"+this.__id,e,t)}},{key:"star",value:function(e){return this._request("PUT","/gists/"+this.__id+"/star",null,e)}},{key:"unstar",value:function(e){return this._request("DELETE","/gists/"+this.__id+"/star",null,e)}},{key:"isStarred",value:function(e){return this._request204or404("/gists/"+this.__id+"/star",null,e)}},{key:"listCommits",value:function(e){return this._requestAllPages("/gists/"+this.__id+"/commits",null,e)}},{key:"getRevision",value:function(e,t){return this._request("GET","/gists/"+this.__id+"/"+e,null,t)}},{key:"listComments",value:function(e){return this._requestAllPages("/gists/"+this.__id+"/comments",null,e)}},{key:"getComment",value:function(e,t){return this._request("GET","/gists/"+this.__id+"/comments/"+e,null,t)}},{key:"createComment",value:function(e,t){return this._request("POST","/gists/"+this.__id+"/comments",{body:e},t)}},{key:"editComment",value:function(e,t,r){return this._request("PATCH","/gists/"+this.__id+"/comments/"+e,{body:t},r)}},{key:"deleteComment",value:function(e,t){return this._request("DELETE","/gists/"+this.__id+"/comments/"+e,null,t)}}]),t}(a.default);t.exports=l},{"./Requestable":9}],2:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=e("./Gist"),i=n(o),a=e("./User"),l=n(a),c=e("./Issue"),f=n(c),_=e("./Search"),h=n(_),p=e("./RateLimit"),y=n(p),d=e("./Repository"),m=n(d),v=e("./Organization"),b=n(v),g=e("./Team"),k=n(g),T=e("./Markdown"),q=n(T),E=e("./Project"),w=n(E),O=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.github.com";u(this,e),this.__apiBase=r,this.__auth=t||{}}return s(e,[{key:"getGist",value:function(e){return new i.default(e,this.__auth,this.__apiBase)}},{key:"getUser",value:function(e){return new l.default(e,this.__auth,this.__apiBase)}},{key:"getOrganization",value:function(e){return new b.default(e,this.__auth,this.__apiBase)}},{key:"getTeam",value:function(e){return new k.default(e,this.__auth,this.__apiBase)}},{key:"getRepo",value:function(e,t){return new m.default(this._getFullName(e,t),this.__auth,this.__apiBase)}},{key:"getIssues",value:function(e,t){return new f.default(this._getFullName(e,t),this.__auth,this.__apiBase)}},{key:"search",value:function(e){return new h.default(e,this.__auth,this.__apiBase)}},{key:"getRateLimit",value:function(){return new y.default(this.__auth,this.__apiBase)}},{key:"getMarkdown",value:function(){return new q.default(this.__auth,this.__apiBase)}},{key:"getProject",value:function(e){return new w.default(e,this.__auth,this.__apiBase)}},{key:"_getFullName",value:function(e,t){var r=e;return t&&(r=e+"/"+t),r}}]),e}();t.exports=O},{"./Gist":1,"./Issue":3,"./Markdown":4,"./Organization":5,"./Project":6,"./RateLimit":7,"./Repository":8,"./Search":10,"./Team":11,"./User":12}],3:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=e("./Requestable"),a=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function(e){function t(e,r,s){n(this,t);var o=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r,s));return o.__repository=e,o}return s(t,e),o(t,[{key:"createIssue",value:function(e,t){return this._request("POST","/repos/"+this.__repository+"/issues",e,t)}},{key:"listIssues",value:function(e,t){return this._requestAllPages("/repos/"+this.__repository+"/issues",e,t)}},{key:"listIssueEvents",value:function(e,t){return this._request("GET","/repos/"+this.__repository+"/issues/"+e+"/events",null,t)}},{key:"listIssueComments",value:function(e,t){return this._request("GET","/repos/"+this.__repository+"/issues/"+e+"/comments",null,t)}},{key:"getIssueComment",value:function(e,t){return this._request("GET","/repos/"+this.__repository+"/issues/comments/"+e,null,t)}},{key:"createIssueComment",value:function(e,t,r){return this._request("POST","/repos/"+this.__repository+"/issues/"+e+"/comments",{body:t},r)}},{key:"editIssueComment",value:function(e,t,r){return this._request("PATCH","/repos/"+this.__repository+"/issues/comments/"+e,{body:t},r)}},{key:"deleteIssueComment",value:function(e,t){return this._request("DELETE","/repos/"+this.__repository+"/issues/comments/"+e,null,t)}},{key:"editIssue",value:function(e,t,r){return this._request("PATCH","/repos/"+this.__repository+"/issues/"+e,t,r)}},{key:"getIssue",value:function(e,t){return this._request("GET","/repos/"+this.__repository+"/issues/"+e,null,t)}},{key:"listMilestones",value:function(e,t){return this._request("GET","/repos/"+this.__repository+"/milestones",e,t)}},{key:"getMilestone",value:function(e,t){return this._request("GET","/repos/"+this.__repository+"/milestones/"+e,null,t)}},{key:"createMilestone",value:function(e,t){return this._request("POST","/repos/"+this.__repository+"/milestones",e,t)}},{key:"editMilestone",value:function(e,t,r){return this._request("PATCH","/repos/"+this.__repository+"/milestones/"+e,t,r)}},{key:"deleteMilestone",value:function(e,t){return this._request("DELETE","/repos/"+this.__repository+"/milestones/"+e,null,t)}},{key:"createLabel",value:function(e,t){return this._request("POST","/repos/"+this.__repository+"/labels",e,t)}},{key:"listLabels",value:function(e,t){return this._request("GET","/repos/"+this.__repository+"/labels",e,t)}},{key:"getLabel",value:function(e,t){return this._request("GET","/repos/"+this.__repository+"/labels/"+e,null,t)}},{key:"editLabel",value:function(e,t,r){return this._request("PATCH","/repos/"+this.__repository+"/labels/"+e,t,r)}},{key:"deleteLabel",value:function(e,t){return this._request("DELETE","/repos/"+this.__repository+"/labels/"+e,null,t)}}]),t}(a.default);t.exports=l},{"./Requestable":9}],4:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=e("./Requestable"),a=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function(e){function t(e,r){return n(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return s(t,e),o(t,[{key:"render",value:function(e,t){return this._request("POST","/markdown",e,t)}}]),t}(a.default);t.exports=l},{"./Requestable":9}],5:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=e("./Requestable"),a=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function(e){function t(e,r,s){n(this,t);var o=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r,s));return o.__name=e,o}return s(t,e),o(t,[{key:"createRepo",value:function(e,t){return this._request("POST","/orgs/"+this.__name+"/repos",e,t)}},{key:"getRepos",value:function(e){var t=this._getOptionsWithDefaults({direction:"desc"});return this._requestAllPages("/orgs/"+this.__name+"/repos",t,e)}},{key:"isMember",value:function(e,t){return this._request204or404("/orgs/"+this.__name+"/members/"+e,null,t)}},{key:"listMembers",value:function(e,t){return this._request("GET","/orgs/"+this.__name+"/members",e,t)}},{key:"getTeams",value:function(e){return this._requestAllPages("/orgs/"+this.__name+"/teams",void 0,e)}},{key:"createTeam",value:function(e,t){return this._request("POST","/orgs/"+this.__name+"/teams",e,t)}},{key:"listProjects",value:function(e){return this._requestAllPages("/orgs/"+this.__name+"/projects",{AcceptHeader:"inertia-preview"},e)}},{key:"createProject",value:function(e,t){return e=e||{},e.AcceptHeader="inertia-preview",this._request("POST","/orgs/"+this.__name+"/projects",e,t)}}]),t}(a.default);t.exports=l},{"./Requestable":9}],6:[function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=e("./Requestable"),l=function(e){return e&&e.__esModule?e:{default:e}}(a),c=function(e){function t(e,r,n){u(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r,n,"inertia-preview"));return o.__id=e,o}return o(t,e),i(t,[{key:"getProject",value:function(e){return this._request("GET","/projects/"+this.__id,null,e)}},{key:"updateProject",value:function(e,t){return this._request("PATCH","/projects/"+this.__id,e,t)}},{key:"deleteProject",value:function(e){return this._request("DELETE","/projects/"+this.__id,null,e)}},{key:"listProjectColumns",value:function(e){return this._requestAllPages("/projects/"+this.__id+"/columns",null,e)}},{key:"getProjectColumn",value:function(e,t){return this._request("GET","/projects/columns/"+e,null,t)}},{key:"createProjectColumn",value:function(e,t){return this._request("POST","/projects/"+this.__id+"/columns",e,t)}},{key:"updateProjectColumn",value:function(e,t,r){return this._request("PATCH","/projects/columns/"+e,t,r)}},{key:"deleteProjectColumn",value:function(e,t){return this._request("DELETE","/projects/columns/"+e,null,t)}},{key:"moveProjectColumn",value:function(e,t,r){return this._request("POST","/projects/columns/"+e+"/moves",{position:t},r)}},{key:"listProjectCards",value:function(e){var t=this;return this.listProjectColumns().then(function(e){var r=e.data;return Promise.all(r.map(function(e){return t._requestAllPages("/projects/columns/"+e.id+"/cards",null)}))}).then(function(t){var r=t.reduce(function(e,t){var r=t.data;return e.push.apply(e,n(r)),e},[]);return e&&e(null,r),r}).catch(function(t){if(e)return void e(t);throw t})}},{key:"listColumnCards",value:function(e,t){return this._requestAllPages("/projects/columns/"+e+"/cards",null,t)}},{key:"getProjectCard",value:function(e,t){return this._request("GET","/projects/columns/cards/"+e,null,t)}},{key:"createProjectCard",value:function(e,t,r){return this._request("POST","/projects/columns/"+e+"/cards",t,r)}},{key:"updateProjectCard",value:function(e,t,r){return this._request("PATCH","/projects/columns/cards/"+e,t,r)}},{key:"deleteProjectCard",value:function(e,t){return this._request("DELETE","/projects/columns/cards/"+e,null,t)}},{key:"moveProjectCard",value:function(e,t,r,n){return this._request("POST","/projects/columns/cards/"+e+"/moves",{position:t,column_id:r},n)}}]),t}(l.default);t.exports=c},{"./Requestable":9}],7:[function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=e("./Requestable"),a=function(e){return e&&e.__esModule?e:{default:e}}(i),l=function(e){function t(e,r){return n(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return s(t,e),o(t,[{key:"getRateLimit",value:function(e){return this._request("GET","/rate_limit",null,e)}}]),t}(a.default);t.exports=l},{"./Requestable":9}],8:[function(e,t,r){(function(r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=e("./Requestable"),c=n(l),f=e("utf8"),_=n(f),h=e("js-base64"),p=e("debug"),y=n(p),d=(0,y.default)("github:repository"),m=function(e){function t(e,r,n){u(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r,n));return o.__fullname=e,o.__currentTree={branch:null,sha:null},o}return o(t,e),a(t,[{key:"getRef",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/git/refs/"+e,null,t)}},{key:"createRef",value:function(e,t){return this._request("POST","/repos/"+this.__fullname+"/git/refs",e,t)}},{key:"deleteRef",value:function(e,t){return this._request("DELETE","/repos/"+this.__fullname+"/git/refs/"+e,null,t)}},{key:"deleteRepo",value:function(e){return this._request("DELETE","/repos/"+this.__fullname,null,e)}},{key:"listTags",value:function(e){return this._request("GET","/repos/"+this.__fullname+"/tags",null,e)}},{key:"listPullRequests",value:function(e,t){return e=e||{},this._request("GET","/repos/"+this.__fullname+"/pulls",e,t)}},{key:"getPullRequest",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/pulls/"+e,null,t)}},{key:"listPullRequestFiles",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/pulls/"+e+"/files",null,t)}},{key:"compareBranches",value:function(e,t,r){return this._request("GET","/repos/"+this.__fullname+"/compare/"+e+"..."+t,null,r)}},{key:"listBranches",value:function(e){return this._request("GET","/repos/"+this.__fullname+"/branches",null,e)}},{key:"getBlob",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/git/blobs/"+e,null,t,"raw")}},{key:"getBranch",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/branches/"+e,null,t)}},{key:"getCommit",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/git/commits/"+e,null,t)}},{key:"listCommits",value:function(e,t){return e=e||{},e.since=this._dateToISO(e.since),e.until=this._dateToISO(e.until),this._request("GET","/repos/"+this.__fullname+"/commits",e,t)}},{key:"getSingleCommit",value:function(e,t){return e=e||"",this._request("GET","/repos/"+this.__fullname+"/commits/"+e,null,t)}},{key:"getSha",value:function(e,t,r){return e=e?"?ref="+e:"",this._request("GET","/repos/"+this.__fullname+"/contents/"+t+e,null,r)}},{key:"listStatuses",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/commits/"+e+"/statuses",null,t)}},{key:"getTree",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/git/trees/"+e,null,t)}},{key:"createBlob",value:function(e,t){var r=this._getContentObject(e);return d("sending content",r),this._request("POST","/repos/"+this.__fullname+"/git/blobs",r,t)}},{key:"_getContentObject",value:function(e){if("string"==typeof e)return d("contet is a string"),{content:_.default.encode(e),encoding:"utf-8"};if(void 0!==r&&e instanceof r)return d("We appear to be in Node"),{content:e.toString("base64"),encoding:"base64"};if("undefined"!=typeof Blob&&e instanceof Blob)return d("We appear to be in the browser"),{content:h.Base64.encode(e),encoding:"base64"};throw d("Not sure what this content is: "+(void 0===e?"undefined":i(e))+", "+JSON.stringify(e)),new Error("Unknown content passed to postBlob. Must be string or Buffer (node) or Blob (web)")}},{key:"updateTree",value:function(e,t,r,n){var u={base_tree:e,tree:[{path:t,sha:r,mode:"100644",type:"blob"}]};return this._request("POST","/repos/"+this.__fullname+"/git/trees",u,n)}},{key:"createTree",value:function(e,t,r){return this._request("POST","/repos/"+this.__fullname+"/git/trees",{tree:e,base_tree:t},r)}},{key:"commit",value:function(e,t,r,n,u){var s=this;"function"==typeof n&&(u=n,n={});var o={message:r,tree:t,parents:[e]};return o=Object.assign({},n,o),this._request("POST","/repos/"+this.__fullname+"/git/commits",o,u).then(function(e){return s.__currentTree.sha=e.data.sha,e})}},{key:"updateHead",value:function(e,t,r,n){return this._request("PATCH","/repos/"+this.__fullname+"/git/refs/"+e,{sha:t,force:r},n)}},{key:"updateStatus",value:function(e,t,r){return this._request("POST","/repos/"+this.__fullname+"/statuses/"+e,t,r)}},{key:"updateRepository",value:function(e,t){return this._request("PATCH","/repos/"+this.__fullname,e,t)}},{key:"getDetails",value:function(e){return this._request("GET","/repos/"+this.__fullname,null,e)}},{key:"getContributors",value:function(e){return this._request("GET","/repos/"+this.__fullname+"/contributors",null,e)}},{key:"getContributorStats",value:function(e){return this._request("GET","/repos/"+this.__fullname+"/stats/contributors",null,e)}},{key:"getCollaborators",value:function(e){return this._request("GET","/repos/"+this.__fullname+"/collaborators",null,e)}},{key:"isCollaborator",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/collaborators/"+e,null,t)}},{key:"getContents",value:function(e,t,r,n){return t=t?""+encodeURI(t):"",this._request("GET","/repos/"+this.__fullname+"/contents/"+t,{ref:e},n,r)}},{key:"getReadme",value:function(e,t,r){return this._request("GET","/repos/"+this.__fullname+"/readme",{ref:e},r,t)}},{key:"fork",value:function(e){return this._request("POST","/repos/"+this.__fullname+"/forks",null,e)}},{key:"listForks",value:function(e){return this._request("GET","/repos/"+this.__fullname+"/forks",null,e)}},{key:"createBranch",value:function(e,t,r){var n=this;return"function"==typeof t&&(r=t,t=e,e="master"),this.getRef("heads/"+e).then(function(e){var u=e.data.object.sha;return n.createRef({sha:u,ref:"refs/heads/"+t},r)})}},{key:"createPullRequest",value:function(e,t){return this._request("POST","/repos/"+this.__fullname+"/pulls",e,t)}},{key:"updatePullRequest",value:function(e,t,r){return this._request("PATCH","/repos/"+this.__fullname+"/pulls/"+e,t,r)}},{key:"listHooks",value:function(e){return this._request("GET","/repos/"+this.__fullname+"/hooks",null,e)}},{key:"getHook",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/hooks/"+e,null,t)}},{key:"createHook",value:function(e,t){return this._request("POST","/repos/"+this.__fullname+"/hooks",e,t)}},{key:"updateHook",value:function(e,t,r){return this._request("PATCH","/repos/"+this.__fullname+"/hooks/"+e,t,r)}},{key:"deleteHook",value:function(e,t){return this._request("DELETE","/repos/"+this.__fullname+"/hooks/"+e,null,t)}},{key:"listKeys",value:function(e){return this._request("GET","/repos/"+this.__fullname+"/keys",null,e)}},{key:"getKey",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/keys/"+e,null,t)}},{key:"createKey",value:function(e,t){return this._request("POST","/repos/"+this.__fullname+"/keys",e,t)}},{key:"deleteKey",value:function(e,t){return this._request("DELETE","/repos/"+this.__fullname+"/keys/"+e,null,t)}},{key:"deleteFile",value:function(e,t,r){var n=this;return this.getSha(e,t).then(function(u){var s={message:"Delete the file at '"+t+"'",sha:u.data.sha,branch:e};return n._request("DELETE","/repos/"+n.__fullname+"/contents/"+t,s,r)})}},{key:"move",value:function(e,t,r,n){var u=this,s=void 0;return this.getRef("heads/"+e).then(function(e){var t=e.data.object;return u.getTree(t.sha+"?recursive=true")}).then(function(e){var n=e.data,o=n.tree,i=n.sha;s=i;var a=o.map(function(e){return e.path===t&&(e.path=r),"tree"===e.type&&delete e.sha,e});return u.createTree(a)}).then(function(e){var n=e.data;return u.commit(s,n.sha,"Renamed '"+t+"' to '"+r+"'")}).then(function(t){var r=t.data;return u.updateHead("heads/"+e,r.sha,!0,n)})}},{key:"writeFile",value:function(e,t,r,n,u,s){var o=this;"function"==typeof u&&(s=u,u={});var i=t?encodeURI(t):"",a=!1!==u.encode,l={branch:e,message:n,author:u.author,committer:u.committer,content:a?h.Base64.encode(r):r};return this.getSha(e,i).then(function(e){return l.sha=e.data.sha,o._request("PUT","/repos/"+o.__fullname+"/contents/"+i,l,s)},function(){return o._request("PUT","/repos/"+o.__fullname+"/contents/"+i,l,s)})}},{key:"isStarred",value:function(e){return this._request204or404("/user/starred/"+this.__fullname,null,e)}},{key:"star",value:function(e){return this._request("PUT","/user/starred/"+this.__fullname,null,e)}},{key:"unstar",value:function(e){return this._request("DELETE","/user/starred/"+this.__fullname,null,e)}},{key:"createRelease",value:function(e,t){return this._request("POST","/repos/"+this.__fullname+"/releases",e,t)}},{key:"updateRelease",value:function(e,t,r){return this._request("PATCH","/repos/"+this.__fullname+"/releases/"+e,t,r)}},{key:"listReleases",value:function(e){return this._request("GET","/repos/"+this.__fullname+"/releases",null,e)}},{key:"getRelease",value:function(e,t){return this._request("GET","/repos/"+this.__fullname+"/releases/"+e,null,t)}},{key:"deleteRelease",value:function(e,t){return this._request("DELETE","/repos/"+this.__fullname+"/releases/"+e,null,t)}},{key:"mergePullRequest",value:function(e,t,r){return this._request("PUT","/repos/"+this.__fullname+"/pulls/"+e+"/merge",t,r)}},{key:"listProjects",value:function(e){return this._requestAllPages("/repos/"+this.__fullname+"/projects",{AcceptHeader:"inertia-preview"},e)}},{key:"createProject",value:function(e,t){return e=e||{},e.AcceptHeader="inertia-preview",this._request("POST","/repos/"+this.__fullname+"/projects",e,t)}}]),t}(c.default);t.exports=m}).call(this,e("buffer").Buffer)},{"./Requestable":9,buffer:void 0,debug:void 0,"js-base64":void 0,utf8:void 0}],9:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return-1!==k.indexOf(e)}function l(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(/\s*,\s*/).reduce(function(e,t){return-1!==t.search(/rel="next"/)?(t.match(/<(.*)>/)||[])[1]:e},void 0)}function c(e,t){return function(r){var n=void 0;if(r.hasOwnProperty("config")){var u=r.response,s=u.status,o=u.statusText,i=r.config,a=i.method,l=i.url,c=s+" error making request "+a+" "+l+': "'+o+'"';n=new b(c,t,r),v(c+" "+JSON.stringify(r.data))}else n=r;if(!e)throw v("throwing error"),n;v("going to error callback"),e(n)}}var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=e("axios"),p=n(h),y=e("debug"),d=n(y),m=e("js-base64"),v=(0,d.default)("github:request"),b=function(e){function t(e,r,n){s(this,t);var u=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return u.path=r,u.request=n.config,u.response=(n||{}).response||n,u.status=n.status,u}return i(t,e),t}(Error),g=function(){function e(t,r,n){s(this,e),this.__apiBase=r||"https://api.github.com",this.__auth={token:t.token,username:t.username,password:t.password},this.__AcceptHeader=n||"v3",t.token?this.__authorizationHeader="token "+t.token:t.username&&t.password&&(this.__authorizationHeader="Basic "+m.Base64.encode(t.username+":"+t.password))}return _(e,[{key:"__getURL",value:function(e){var t=e;-1===e.indexOf("//")&&(t=this.__apiBase+e);var r="timestamp="+(new Date).getTime();return t.replace(/(timestamp=\d+)/,r)}},{key:"__getRequestHeaders",value:function(e,t){var r={"Content-Type":"application/json;charset=UTF-8",Accept:"application/vnd.github."+(t||this.__AcceptHeader)};return e&&(r.Accept+=".raw"),r.Accept+="+json",this.__authorizationHeader&&(r.Authorization=this.__authorizationHeader),r}},{key:"_getOptionsWithDefaults",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.visibility||e.affiliation||(e.type=e.type||"all"),e.sort=e.sort||"updated",e.per_page=e.per_page||"100",e}},{key:"_dateToISO",value:function(e){return e&&e instanceof Date&&(e=e.toISOString()),e}},{key:"_request",value:function(e,t,r,n,u){var s=this.__getURL(t),o=(r||{}).AcceptHeader;o&&delete r.AcceptHeader;var i=this.__getRequestHeaders(u,o),l={};r&&"object"===(void 0===r?"undefined":f(r))&&a(e)&&(l=r,r=void 0);var _={url:s,method:e,headers:i,params:l,data:r,responseType:u?"text":"json"};v(_.method+" to "+_.url);var h=(0,p.default)(_).catch(c(n,t));return n&&h.then(function(e){e.data&&Object.keys(e.data).length>0?n(null,e.data,e):"GET"!==_.method&&Object.keys(e.data).length<1?n(null,e.status<300,e):n(null,e.data,e)}),h}},{key:"_request204or404",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"GET";return this._request(n,e,t).then(function(e){return r&&r(null,!0,e),!0},function(e){if(404===e.response.status)return r&&r(null,!1,e),!1;throw r&&r(e),e})}},{key:"_requestAllPages",value:function(e,t,r,n){var s=this;return n=n||[],this._request("GET",e,t).then(function(o){var i,a=void 0;if(o.data instanceof Array)a=o.data;else{if(!(o.data.items instanceof Array)){var c="cannot figure out how to append "+o.data+" to the result set";throw new b(c,e,o)}a=o.data.items}(i=n).push.apply(i,u(a));var f=l(o.headers.link);return!f||t&&"number"!=typeof t.page?(r&&r(null,n,o),o.data=n,o):(v("getting next page: "+f),s._requestAllPages(f,t,r,n))}).catch(c(r,e))}}]),e}();t.exports=g;var k=["GET","HEAD","DELETE"]},{axios:void 0,debug:void 0,"js-base64":void 0}],10:[function(e,t,r){"use strict"
;function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=e("./Requestable"),l=n(a),c=e("debug"),f=n(c),_=(0,f.default)("github:search"),h=function(e){function t(e,r,n){u(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r,n));return o.__defaults=o._getOptionsWithDefaults(e),o}return o(t,e),i(t,[{key:"_search",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,u={};return Object.keys(this.__defaults).forEach(function(e){u[e]=t.__defaults[e]}),Object.keys(r).forEach(function(e){u[e]=r[e]}),_("searching "+e+" with options:",u),this._requestAllPages("/search/"+e,u,n)}},{key:"forRepositories",value:function(e,t){return this._search("repositories",e,t)}},{key:"forCode",value:function(e,t){return this._search("code",e,t)}},{key:"forIssues",value:function(e,t){return this._search("issues",e,t)}},{key:"forUsers",value:function(e,t){return this._search("users",e,t)}}]),t}(l.default);t.exports=h},{"./Requestable":9,debug:void 0}],11:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=e("./Requestable"),l=n(a),c=e("debug"),f=n(c),_=(0,f.default)("github:team"),h=function(e){function t(e,r,n){u(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r,n));return o.__teamId=e,o}return o(t,e),i(t,[{key:"getTeam",value:function(e){return _("Fetching Team "+this.__teamId),this._request("Get","/teams/"+this.__teamId,void 0,e)}},{key:"listRepos",value:function(e){return _("Fetching repositories for Team "+this.__teamId),this._requestAllPages("/teams/"+this.__teamId+"/repos",void 0,e)}},{key:"editTeam",value:function(e,t){return _("Editing Team "+this.__teamId),this._request("PATCH","/teams/"+this.__teamId,e,t)}},{key:"listMembers",value:function(e,t){return _("Getting members of Team "+this.__teamId),this._requestAllPages("/teams/"+this.__teamId+"/members",e,t)}},{key:"getMembership",value:function(e,t){return _("Getting membership of user "+e+" in Team "+this.__teamId),this._request("GET","/teams/"+this.__teamId+"/memberships/"+e,void 0,t)}},{key:"addMembership",value:function(e,t,r){return _("Adding user "+e+" to Team "+this.__teamId),this._request("PUT","/teams/"+this.__teamId+"/memberships/"+e,t,r)}},{key:"isManagedRepo",value:function(e,t,r){return _("Getting repo management by Team "+this.__teamId+" for repo "+e+"/"+t),this._request204or404("/teams/"+this.__teamId+"/repos/"+e+"/"+t,void 0,r)}},{key:"manageRepo",value:function(e,t,r,n){return _("Adding or Updating repo management by Team "+this.__teamId+" for repo "+e+"/"+t),this._request204or404("/teams/"+this.__teamId+"/repos/"+e+"/"+t,r,n,"PUT")}},{key:"unmanageRepo",value:function(e,t,r){return _("Remove repo management by Team "+this.__teamId+" for repo "+e+"/"+t),this._request204or404("/teams/"+this.__teamId+"/repos/"+e+"/"+t,void 0,r,"DELETE")}},{key:"deleteTeam",value:function(e){return _("Deleting Team "+this.__teamId),this._request204or404("/teams/"+this.__teamId,void 0,e,"DELETE")}}]),t}(l.default);t.exports=h},{"./Requestable":9,debug:void 0}],12:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=e("./Requestable"),l=n(a),c=e("debug"),f=n(c),_=(0,f.default)("github:user"),h=function(e){function t(e,r,n){u(this,t);var o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r,n));return o.__user=e,o}return o(t,e),i(t,[{key:"__getScopedUrl",value:function(e){if(this.__user)return e?"/users/"+this.__user+"/"+e:"/users/"+this.__user;switch(e){case"":return"/user";case"notifications":case"gists":return"/"+e;default:return"/user/"+e}}},{key:"listRepos",value:function(e,t){return"function"==typeof e&&(t=e,e={}),e=this._getOptionsWithDefaults(e),_("Fetching repositories with options: "+JSON.stringify(e)),this._requestAllPages(this.__getScopedUrl("repos"),e,t)}},{key:"listOrgs",value:function(e){return this._request("GET",this.__getScopedUrl("orgs"),null,e)}},{key:"listFollowers",value:function(e){return this._request("GET",this.__getScopedUrl("followers"),null,e)}},{key:"listFollowing",value:function(e){return this._request("GET",this.__getScopedUrl("following"),null,e)}},{key:"listGists",value:function(e){return this._request("GET",this.__getScopedUrl("gists"),null,e)}},{key:"listNotifications",value:function(e,t){return e=e||{},"function"==typeof e&&(t=e,e={}),e.since=this._dateToISO(e.since),e.before=this._dateToISO(e.before),this._request("GET",this.__getScopedUrl("notifications"),e,t)}},{key:"getProfile",value:function(e){return this._request("GET",this.__getScopedUrl(""),null,e)}},{key:"listStarredRepos",value:function(e){var t=this._getOptionsWithDefaults();return this._requestAllPages(this.__getScopedUrl("starred"),t,e)}},{key:"listStarredGists",value:function(e,t){return e=e||{},"function"==typeof e&&(t=e,e={}),e.since=this._dateToISO(e.since),this._request("GET","/gists/starred",e,t)}},{key:"getEmails",value:function(e){return this._request("GET","/user/emails",null,e)}},{key:"follow",value:function(e,t){return this._request("PUT","/user/following/"+this.__user,null,t)}},{key:"unfollow",value:function(e,t){return this._request("DELETE","/user/following/"+this.__user,null,t)}},{key:"createRepo",value:function(e,t){return this._request("POST","/user/repos",e,t)}}]),t}(l.default);t.exports=h},{"./Requestable":9,debug:void 0}]},{},[2])(2)});
//# sourceMappingURL=GitHub.min.js.map
