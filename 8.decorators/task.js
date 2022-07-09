function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');  
    let objectInCache = cache.find((item) => item.hash == hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache !== undefined) { // если элемент не найден
      console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({
      'hash': hash,
      'value': result,
    }); // добавляем элемент с правильной структурой

    if (cache.length > 5) { 
      cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 

    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timer = null;

 function wrapper(...args) {
    if (timer === null) {
      func(...args);
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), ms);
    }
  }
  return wrapper;
}

function debounceDecorator2(func) {
  let timer = null;

  function wrapper(...args) {
    if (timer === null) {
      func(...args);
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), ms);
    }
    wrapper.count++;
  }
  wrapper.count = 0;
  return wrapper;
}
