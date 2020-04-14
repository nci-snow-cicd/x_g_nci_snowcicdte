/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-14 16:08:57
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:08:57
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_ui_action.do?sys_id=6be4e2671b44541094edddb6bc4bcb1c
 */
function checkUpstreamTravel() {
    var gajax = new GlideAjax("global.SMTaskDependency");
    gajax.addParam("sysparm_name", "checkUpstreamTasks");
	gajax.addParam("state_flow_id", "a3e4e2671b44541094edddb6bc4bcb1c");
    gajax.addParam("sysparm_uuid", g_form.getUniqueValue());
    gajax.getXMLAnswer(ajaxResponseTravel);
}

function ajaxResponseTravel(response) {
   if (response == 'true'){
      showDialog();
   } else {
	  // no upstream tasks --> action has been processed by the script include already
      gsftSubmit(null, g_form.getFormElement(), gel('startTravel').value);
   }
}

function showDialog() {
	var dialogClass;
    try {
    	 dialogClass = GlideModal;
    } catch(e) {
    	dialogClass = GlideDialogWindow;
    }
	var dialog = new dialogClass("sm_open_task_upstream_travel"); //Render the dialog containing the UI Page 'task_comments_dialog'
    dialog.setTitle("Are you sure?"); //Set the dialog title
    dialog.setPreference("sys_id", g_form.getUniqueValue());
    dialog.setPreference("short_text", "Open task dependencies still remain, are you sure you would like to start travel?");
	dialog.setPreference('state_flow_id', 'a3e4e2671b44541094edddb6bc4bcb1c');
    dialog.render(); //Open the dialog
}

if (typeof window == 'undefined')
	serverStartTravel();

function serverStartTravel() {
	new global.StateFlow().processFlow(current, 'a3e4e2671b44541094edddb6bc4bcb1c', 'manual');
}
