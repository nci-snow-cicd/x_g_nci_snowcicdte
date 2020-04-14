/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_security_acl
 * Created On  : 2020-04-14 16:09:35
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:35
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_security_acl.do?sys_id=cd1522a71b44541094edddb6bc4bcbbd
 */
var sc = new sn_sm.SMConfiguration();
var stateFlowsOff = !sc.isEnabled(current, 'use_sf');
var taskNotClosed =
	current.state != global.SMConstants.TASK_CLOSED_COMPLETE &&
	current.state != global.SMConstants.TASK_CLOSED_INCOMPLETE &&
	current.state != global.SMConstants.TASK_CANCELLED;

answer = stateFlowsOff || taskNotClosed;
