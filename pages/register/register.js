(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{1164:function(t,e,n){"use strict";n.r(e);var i=n("4e35"),r=n("9c6d");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("368a");var a,s=n("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"ff8d5224",null,!1,i["a"],a);e["default"]=o.exports},"368a":function(t,e,n){"use strict";var i=n("7407"),r=n.n(i);r.a},"4e35":function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}))},7407:function(t,e,n){},7461:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,i,r,u,a){try{var s=t[u](a),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(i,r)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function s(t){u(a,i,r,s,o,"next",t)}function o(t){u(a,i,r,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=a(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],n=t.getStorageSync("loginTable"),this.tableName=n,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),this.styleChange();case 5:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{yonghuxingbieChange:function(t){this.yonghuxingbieIndex=t.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=a(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.yonghuming||"yonghu"!=this.tableName){t.next=3;break}return this.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.xingming||"yonghu"!=this.tableName){t.next=9;break}return this.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){t.next=12;break}return this.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){t.next=15;break}return this.$utils.msg("余额应输入数字"),t.abrupt("return");case 15:return t.next=17,this.$api.register("".concat(this.tableName),this.ruleForm);case 17:this.$utils.msgBack("注册成功");case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}};e.default=s}).call(this,n("543d")["default"])},"881e":function(t,e,n){"use strict";(function(t){n("2650"),n("921b");i(n("66fd"));var e=i(n("1164"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"9c6d":function(t,e,n){"use strict";n.r(e);var i=n("7461"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a}},[["881e","common/runtime","common/vendor"]]]);