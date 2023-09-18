import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/use/Homepage/Homepage";
import MasterLayout from "./pages/use/theme/masterLayout/MasterLayout";
import { ROUTERS } from "./ultils/router";
import ProfilePage from "./pages/use/ProfilePage/ProfilePage";
const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Homepage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
