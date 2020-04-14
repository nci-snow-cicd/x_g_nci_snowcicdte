/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_script
 * Created On  : 2020-04-14 16:08:58
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:08:58
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_script.do?sys_id=00f4e2671b44541094edddb6bc4bcbb2
 */
new global.StateFlow().processFlow(current, '08f4e2671b44541094edddb6bc4bcbb1', 'automatic');
try {
	action.setRedirectURL(current);
}
catch(e) {}
