"use strict";

const fs = require("fs");
const Controller = require("egg").Controller;

class HttpclientController extends Controller {
  async test() {
    const ctx = this.ctx;
    ctx.body = ctx.request.body;
  }
  async conversation() {
    const ctx = this.ctx;
    let res = null;
    try {
      res = await ctx.curl("https://aicursor.com/conversation", {
        method: "post",
        headers: {
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Accept-Encoding": "gzip, deflate, br",
          "Content-Type": "application/json",
          "response-type": "text/event-stream; charset=utf-8",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Cursor/0.1.1 Chrome/108.0.5359.62 Electron/22.0.0 Safari/537.36",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        contentType: "application/json",
        data: JSON.stringify(ctx.request.body),
      });
    } catch (error) {
      res = error;
    }
    ctx.body = res.data.toString();
  }
}

module.exports = HttpclientController;
