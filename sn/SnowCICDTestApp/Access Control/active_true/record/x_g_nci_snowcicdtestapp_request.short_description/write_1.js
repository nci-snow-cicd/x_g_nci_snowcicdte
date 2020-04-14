/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_security_acl
 * Created On  : 2020-04-14 16:09:32
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:32
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_security_acl.do?sys_id=d8156e671b44541094edddb6bc4bcb3a
 */
var sc = new sn_sm.SMConfiguration();
var stateFlowsOff = !sc.isEnabled(current, 'use_sf');
answer = stateFlowsOff || current.state == global.SMConstants.ORDER_DRAFT;
