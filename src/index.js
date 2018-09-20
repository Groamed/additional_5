module.exports = function check(str, bracketsConfig) {
  // your solution
  var arr = [], bal = true, sc = [{}], ou = true;
  for(var i = 0;i<str.length;i++)
  {
    bracketsConfig.forEach(el => {
      if(str[i] == el[0])
      {
        arr.push(str[i]);
        if(el[0] == el[1])
        {
          for(var j = 0;j<sc.length;j++)
          {
            ou = true;
            if(sc[j][el[0]] == 1)
            {
              sc.splice(j, 1);
              arr.pop();
              if((arr.length == 0) || (arr.pop() != el[0]))
              {
                bal = false;
              }
              ou = false;
              break;
            }    
          };
          if(ou)
            sc.push({[el[0]]: 1});
        }
      }
      else if(str[i] == el[1])
        {
          if((arr.length == 0) || ((ou = arr.pop()) != el[0]))
          {
            bal = false;
          }
        }
    });
  }
  if(arr.length > 0)
  {
    bal = false;
  }
  return bal;
}
