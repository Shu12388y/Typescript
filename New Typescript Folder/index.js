function helloWorldBinary() {
    const text = "Hello World";
    let binary = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const binaryCode = charCode.toString(2);
      binary += binaryCode + " ";
    }
    console.log(binary);
  }
  


helloWorldBinary();  