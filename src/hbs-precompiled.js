import * as Handlebars from "handlebars/runtime";
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['CardHeader/CardHeader'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"cards-header\">\r\n    <h2>Рестораны</h2>\r\n    <div class=\"filters\">\r\n        <button class=\"active\">Все</button>\r\n        <button>Самовывоз</button>\r\n        <button>Бургеры</button>\r\n        <button>Суши</button>\r\n        <button>Пицца</button>\r\n        <button>Вок</button>\r\n        <button>Паста</button>\r\n        <button>Завтраки</button>\r\n        <div class=\"more\">\r\n            <button>Ещё</button>\r\n        </div>\r\n        <div class=\"sort\">\r\n            <span>Сортировка</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n</div>";
},"useData":true});
templates['Cards/Cards'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"cardPadClass") : depths[1]), depth0))
    + "\" id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\">\r\n        <div class=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"cardClass") : depths[1]), depth0))
    + "\">\r\n            <div class=\"image-wrapper\">\r\n                <img src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"image") : depth0), depth0))
    + " alt=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\" class=\"card-image\">\r\n                <a href=\"/fav\" class=\"fav-wrapper\">\r\n                    <img src=\"/static/icons/fav.png\" alt=\"fav\" class=\"fav-image\">\r\n                </a>\r\n            </div>\r\n            <div class=\"card-content\">\r\n                <div class=\"card-left\">\r\n                    <div class=\"card-name\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</div>\r\n                    <div class=\"card-time\">\r\n                        <img src=\"/static/icons/car.png\" alt=\"car\" class=\"car-image\">\r\n                        <div>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"time") : depth0), depth0))
    + "</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-rating\">\r\n                    <img src=\"/static/icons/star.png\" alt=\"star\" class=\"star-image\">\r\n                    <div>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"rating") : depth0), depth0))
    + "</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":25,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
templates['Header/Header'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"address-bar\">\r\n            <img src=\"/static/icons/address.png\" alt=\"address\" class=\"button-image\">\r\n            <span>Город</span>\r\n            <select name=\"address\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"cities") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":17,"column":25}}})) != null ? stack1 : "")
    + "            </select>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <option value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</option>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        <a href=\"/orders\" class=\"button-wrapper\">\r\n            <img src=\"/static/icons/bell.png\" alt=\"fav\" class=\"button-image\">\r\n            <span class=\"button-text\">Уведомления</span>\r\n        </a>\r\n        <a href=\"/notifications\" class=\"button-wrapper\">\r\n            <img src=\"/static/icons/checklist.png\" alt=\"fav\" class=\"button-image\">\r\n            <span class=\"button-text\">Заказ</span>\r\n        </a>\r\n        <a href=\"/logout\" class=\"button-wrapper\">\r\n            <img src=\"/static/icons/user.png\" alt=\"logo\" class=\"logo\">\r\n        </a>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <a href=\"/login\">\r\n            <button type=\"submit\" class=\"login\">Войти</button>\r\n        </a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"left\">\r\n    <a href=\"/\">\r\n        <img src=\"/static/icons/logo.png\" alt=\"logo\" class=\"logo\">\r\n    </a>\r\n    <form class=\"search-bar\">\r\n        <img src=\"/static/icons/search.png\" alt=\"search\" class=\"search-icon\">\r\n        <input type=\"text\" placeholder=\"Поиск ресторанов и категорий\" name=\"search\">\r\n        <button type=\"submit\">Найти</button>\r\n    </form>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"userAuthed") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"right\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"userAuthed") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":39,"column":11}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
templates['Login/Login'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\">\r\n                <input maxlength=\"100\" type=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"type") : depth0), depth0))
    + "\" placeholder=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"placeholder") : depth0), depth0))
    + "\" name=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\">\r\n                <div class=\"warning\" id=\"warn_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"warn") : depth0), depth0))
    + "</div>\r\n            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"form-wrapper\">\r\n    <img src=\"/static/icons/logo.png\" alt=\"logo\" class=\"greeting-logo\">\r\n    <form class=\"login-form\" novalidate>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"inputs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":9,"column":17}}})) != null ? stack1 : "")
    + "\r\n        <div id=\"login\">\r\n            <div class=\"warning\" id=\"warn_login\"></div>\r\n            <button id=\"login\" type=\"submit\">Войти</button>\r\n        </div>\r\n\r\n        <div id=\"signup\">\r\n            <div class=\"warning\" id=\"warn_signup\"></div>\r\n            <button id=\"signup\">Зарегистрироваться</button>\r\n        </div>\r\n    </form>\r\n</div>";
},"useData":true});
templates['Store/Store'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"store\">\r\n    <div class=\"column\" style=\"flex: 1\" id=\"menuCol\">\r\n    </div>\r\n    <div class=\"column\" style=\"flex: 2\" id=\"contentCol\">\r\n    </div>\r\n    <div class=\"column\" style=\"flex: 1\" id=\"cartCol\">\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();