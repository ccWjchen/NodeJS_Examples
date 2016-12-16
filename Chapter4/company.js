function Company() {
  this.companyId="";
  this.companyName="";
}

Company.prototype.setCompanyId =
  function (id) {
    this.companyId=id;
  };

Company.prototype.getCompanyId =
  function () {
    return this.companyId;
  };

Company.numberOfLoad=0;

exports.Company=Company;
