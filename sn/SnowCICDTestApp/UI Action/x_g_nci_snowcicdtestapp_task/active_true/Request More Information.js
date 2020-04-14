/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-14 16:08:57
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:08:57
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_ui_action.do?sys_id=ffe4e2671b44541094edddb6bc4bcb3c
 */
function moveBackToQualifier() {
	if (g_form.getValue('work_notes') == '') {
		g_form.addErrorMessage(getMessage('Provide a reason for sending back to Draft in Work notes'));
		return false;
	}
	gsftSubmit(null, g_form.getFormElement(), gel('requestMoreInformation').value);
}

if (typeof window == 'undefined')
	serverBackToQualifier();

function serverBackToQualifier() {
	new global.StateFlow().processFlow(current, 'f7e4e2671b44541094edddb6bc4bcb3c', 'manual');
}
