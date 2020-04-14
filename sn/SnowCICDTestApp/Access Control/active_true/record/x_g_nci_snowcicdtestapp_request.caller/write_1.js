/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_security_acl
 * Created On  : 2020-04-14 16:09:31
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:31
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_security_acl.do?sys_id=c415ea671b44541094edddb6bc4bcb16
 */
var sc = new sn_sm.SMConfiguration();
var stateFlowsOff = !sc.isEnabled(current, 'use_sf');
var requestInDraft = current.state == global.SMConstants.ORDER_DRAFT;

answer = stateFlowsOff || requestInDraft;
