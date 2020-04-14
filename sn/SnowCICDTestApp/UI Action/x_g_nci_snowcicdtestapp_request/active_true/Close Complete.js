/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-14 16:08:55
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:08:55
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_ui_action.do?sys_id=5fe4a2671b44541094edddb6bc4bcbab
 */
function closeComplete() {
	(new SMTask()).checkListValidation('Close Complete', 'closeComplete');
}

if (typeof window == 'undefined')
	new global.StateFlow().processFlow(current, '57e4a2671b44541094edddb6bc4bcbab', 'manual');
