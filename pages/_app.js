import "tailwindcss/tailwind.css";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getAllCategories } from "../redux/actions/categoriesAction";
import { wrapper } from "../redux/store";

import Layout from "../layout/layout";

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      .
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(MyApp);
