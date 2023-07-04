var reportsWidget = {
  options: {
    containerSelector: ".reports",
    template: `
          {{#reportData}}
          <article class="reports_item">
              <a href="{{cover}}" target="_blank">
                  <img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>
              </a>
              <footer class="reports_docs">
                  {{#documents}}
                  <h3 class="reports_title">
                      <a href="{{url}}" target="_blank">{{title}} ({{file_size}}, {{file_type}})</a>
                  </h3>
                  {{/documents}}
              </footer>
          </article>
          {{/reportData}}`,
  },

  init: function () {
    this.renderReports(reportData || []);
  },

  renderReports: function (reports) {
    var inst = this;
    var options = inst.options;
    var renderedTemplate = Mustache.render(options.template, {
      reportData: reports,
    });
    $(options.containerSelector).html(renderedTemplate);
  },
};

reportsWidget.init();
