// {number, 12345} -> {number, 345}
Number(String(12345).replace("12", ""));
  //  {number, 12345}
  String(12345);
  //  {string, "12345"}
  "12345".replace("12", "");
  //  {string, "345"}
  Number("345");
  //  {number, 345}