  function createInstanceAPIForInstance(instance){
    $.mockjax({
      url: '/instances/'+instance.id,
      responseTime: 750,
      responseText: {
        instance: instance
      }
    });
  }

  function createInstanceAPIsForRange(start, end){
    instanceArray=[];
    for (var i=start; i<=end; i++){
      instance = {
        "id": i,
        "name": "Instance " + i,
        "status": "running"
      };
      instanceArray.push(instance);
      createInstanceAPIForInstance(instance);
    }
    createInstancesAPIForInstances(instanceArray);
  }

  function createInstancesAPIForInstances(instanceArray){
    $.mockjax({
      url: '/instances',
      responseTime: 750,
      responseText: {
        instances: instanceArray
      }
    });
  }

  createInstanceAPIsForRange(1,10000);