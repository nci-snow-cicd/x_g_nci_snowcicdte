/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_security_acl
 * Created On  : 2020-04-14 16:09:31
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:31
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_security_acl.do?sys_id=cc15aa671b44541094edddb6bc4bcbe9
 */
var sc = new sn_sm.SMConfiguration();
var stateFlowsOff = !sc.isEnabled(current, 'use_sf');
var requestNotClosed = 
	current.state != global.SMConstants.ORDER_CLOSED_COMPLETE &&
	current.state != global.SMConstants.ORDER_CLOSED_INCOMPLETE &&
	current.state != global.SMConstants.ORDER_CANCELLED;

answer = stateFlowsOff || requestNotClosed;
