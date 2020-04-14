/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_security_acl
 * Created On  : 2020-04-14 16:09:33
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:33
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_security_acl.do?sys_id=10156e671b44541094edddb6bc4bcb41
 */
var sc = new sn_sm.SMConfiguration();
var stateFlowsOff = !sc.isEnabled(current, 'use_sf');
var requestNotClosed = 
	current.state != global.SMConstants.ORDER_CLOSED_COMPLETE &&
	current.state != global.SMConstants.ORDER_CLOSED_INCOMPLETE &&
	current.state != global.SMConstants.ORDER_CANCELLED;

answer = stateFlowsOff || requestNotClosed;
