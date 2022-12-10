import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { start } from "nprogress";
const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
export const beforeEachGuard = (router) => {
  router.beforeEach(async (to, from) => {
    if (to.path != from.path) {
      start();
    }
    const user = await getCurrentUser();
    if (to.name != "Auth") {
      if (!user) {
        return { name: "Auth" };
      }
    } else if (to.name == "Auth" && user) {
      return { name: "Home" };
    }
  });
};
