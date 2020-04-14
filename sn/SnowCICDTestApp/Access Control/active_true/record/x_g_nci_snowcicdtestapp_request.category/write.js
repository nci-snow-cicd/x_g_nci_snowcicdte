/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_security_acl
 * Created On  : 2020-04-14 16:09:31
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:31
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_security_acl.do?sys_id=0815ea671b44541094edddb6bc4bcb87
 */
var sc = new sn_sm.SMConfiguration();
var stateFlowsOff = !sc.isEnabled(current, 'use_sf');
answer = stateFlowsOff || current.state == global.SMConstants.ORDER_DRAFT;
