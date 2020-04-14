/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-14 16:08:56
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:08:57
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_ui_action.do?sys_id=a3e4e2671b44541094edddb6bc4bcb14
 */
function closeComplete() {
	(new SMTask()).checkListValidation('Close Complete', 'closeComplete');
}

if (typeof window == 'undefined')
	new global.StateFlow().processFlow(current, 'abe4e2671b44541094edddb6bc4bcb13', 'manual');
