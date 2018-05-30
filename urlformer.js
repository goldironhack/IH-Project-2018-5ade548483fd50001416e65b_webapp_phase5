// https://data.cityofnewyork.us/resource/9s4h-37hy.json?$select=ky_cd,ofns_desc,boro_nm,latitude,longitude,law_cat_cd&$where=cmplnt_fr_dt > '2010-01-01T00:00:00.000' and latitude IS NOT NULL&$limit=10000

function URLFormer(url) {
  this.endpoint = url + "?";
  this.finalurl = url + "?";
}

URLFormer.prototype.setEndPoint = function(url) {
  this.endpoint = url + "?";
  this.finalurl = url + "?";
}

URLFormer.prototype.select = function(cols) {
  let s = "&$select=";
  this.finalurl = this.finalurl + s + cols;
  return this;
}

URLFormer.prototype.where = function(conditional) {
  let s = "&$where=";
  this.finalurl = this.finalurl + s + encode(conditional);
  return this;
}

URLFormer.prototype.limit = function(limit) {
  let s = "&$limit=";
  this.finalurl = this.finalurl + s + String(limit);
  return this;
}

URLFormer.prototype.clear = function() {
  this.finalurl = this.endpoint;
}

function encode(url) {
  return encodeURI(url).replace(/'/g, escape);
}
