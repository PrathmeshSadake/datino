import React from "react";
import "tailwindcss/tailwind.css";
import { wrapper } from "../redux/store";

import Layout from "../layout/layout";

const MyApp = ({ Component, pageProps }) => (
  <Layout>.
    <Component {...pageProps} />
  </Layout>
);

export default wrapper.withRedux(MyApp);
