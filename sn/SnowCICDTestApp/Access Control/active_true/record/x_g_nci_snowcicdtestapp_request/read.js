/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_security_acl
 * Created On  : 2020-04-14 16:09:30
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:30
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_security_acl.do?sys_id=fb05aa671b44541094edddb6bc4bcb88
 */
var u = gs.getUserID();
answer = current.caller == u || current.opened_for == u || current.opened_by == u || current.watch_list.toString().indexOf(u) >=0 || current.isNewRecord() || !current.getUniqueValue();
