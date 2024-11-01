  const fetchWonders = async () => {
    const response = await axios.get('https://www.world-wonders-api.org/v0/wonders/');
  
    console.log(response.data);
  };
  
  fetchWonders();
