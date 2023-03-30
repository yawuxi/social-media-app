import { FC, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES, RoutesEnum } from "routing/routes";
import { Layout } from "components/Layout";

export const AppRouter: FC = () => {
  const [isLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <Layout>
        <Routes>
          {PRIVATE_ROUTES.map(({ path, element, id }) => (
            <Route path={path} element={element} key={id} />
          ))}
          <Route path="*" element={<Navigate to={RoutesEnum.HOME} />} />
        </Routes>
      </Layout>
    );
  }

  return (
    <Routes>
      {PUBLIC_ROUTES.map(({ path, element, id }) => (
        <Route path={path} element={element} key={id} />
      ))}
      <Route path="*" element={<Navigate to={RoutesEnum.AUTH} />} />
    </Routes>
  );
};
