/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_security_acl
 * Created On  : 2020-04-14 16:09:33
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:33
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_security_acl.do?sys_id=e8156e671b44541094edddb6bc4bcb63
 */
var sc = new sn_sm.SMConfiguration();
var stateFlowsOff = !sc.isEnabled(current, 'use_sf');
answer = stateFlowsOff;
