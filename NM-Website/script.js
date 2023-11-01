function fetchSensorData() 
{
   const randomData = (Math.random() * 100).toFixed(2); 
   return randomData; 
} 
   function updateSensorData() 
   { 
    const sensorDataElement = document.getElementById("sensorData");
     const sensorData = fetchSensorData(); 
     sensorDataElement.textContent = `Sensor Data: ${sensorData} units`;
   }
 setInterval(updateSensorData, 500);