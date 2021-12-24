import {App}  from "vue";
import router,{setupRouter} from "@/router";

const setupInit = (app: App) => {
  setupRouter(app);
};
export default setupInit
export {
    router
}
