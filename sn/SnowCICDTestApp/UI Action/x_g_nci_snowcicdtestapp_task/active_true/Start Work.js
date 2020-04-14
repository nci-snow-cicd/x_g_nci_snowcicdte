/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-14 16:08:59
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:08:59
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_ui_action.do?sys_id=48f4e2671b44541094edddb6bc4bcbc0
 */
function checkUpstreamWork() {
   var gajax = new GlideAjax("global.SMTaskDependency");
   gajax.addParam("sysparm_name", "checkUpstreamTasks");
   gajax.addParam("state_flow_id", "0cf4e2671b44541094edddb6bc4bcbbc");
   gajax.addParam("sysparm_uuid", g_form.getUniqueValue());
   gajax.getXMLAnswer(ajaxResponse);
}

function ajaxResponse(response) {
   if (response == 'true')
      showDialogWork();
   else
      gsftSubmit(null, g_form.getFormElement(), gel('startWork').value);
}

function showDialogWork() {
    var dialogClass;
    try {
    	 dialogClass = GlideModal;
    } catch(e) {
    	dialogClass = GlideDialogWindow;
    }
    var dialog = new dialogClass("sm_open_task_upstream_work"); //Render the dialog containing the UI Page 'task_comments_dialog'
    dialog.setTitle("Are you sure?"); //Set the dialog title
    dialog.setPreference("sys_id", g_form.getUniqueValue());
    dialog.setPreference("short_text", "Open task dependencies still remain, are you sure you would like to start work?");
    dialog.setPreference('state_flow_id', '0cf4e2671b44541094edddb6bc4bcbbc');
    dialog.render(); //Open the dialog
}

if (typeof window == 'undefined')
	serverStartWork();

function serverStartWork() {
	new global.StateFlow().processFlow(current, '0cf4e2671b44541094edddb6bc4bcbbc', 'manual');
}
