/*
 + ------------------------------------------------------------------
 | 404 NotFound
 + ------------------------------------------------------------------ 
 */

import React from "react";
import { connect } from "react-redux";

import "./index.less";

function NotFoundPageContainer() {
  return (
    <div className="page-notfound">
      <div className="box">404 not found</div>
    </div>
  );
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    actions: {},
  })
)(NotFoundPageContainer);
