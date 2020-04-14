/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_security_acl
 * Created On  : 2020-04-14 16:09:35
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:35
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_security_acl.do?sys_id=3c1522a71b44541094edddb6bc4bcb8e
 */
var sc = new sn_sm.SMConfiguration();
var stateFlowsOff = !sc.isEnabled(current, 'use_sf');
var inValidState =
	current.state == global.SMConstants.TASK_DRAFT ||
	current.state == global.SMConstants.TASK_PENDING_DISPATCH ||
	current.state == global.SMConstants.TASK_ASSIGNED ||
	current.state == global.SMConstants.TASK_ACCEPTED;

answer = stateFlowsOff || inValidState;
