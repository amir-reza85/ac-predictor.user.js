$("#estimator-input").val(localStorage.getItem("sidemenu_estimator_value"));
if (!SideMenu.Datas.History) await SideMenu.Datas.Update.History();