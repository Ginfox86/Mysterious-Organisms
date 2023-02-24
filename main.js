// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory (number, array) {
    var batchSurvive = [];
  return {
      specimenNum: number,
      dna: array,
      mutate(){
      var random = Math.floor(Math.random() * 15)
      var numVal = dna[random];
      var newVal = returnRandBase(1);
      while(numVal === newVal){
        newVal = returnRandBase(1)
        if (numVal !== newVal){
        newObj = dna.splice(random, 1, newVal)
      }
      break
      }
      if (numVal !== newVal){
        newObj = dna.splice(random, 1, newVal)
      }
      return newObj
      },
     compareDNA(object) {
        var currentDNA = object.dna;
        var passedInDNA = mockUpStrand();
        var count = 0;
        var percent = count / 15 * 100; 
        for(i=0; i < currentDNA.length || i < passedInDNA.length;i++){
      if (currentDNA[i] === passedInDNA[i]){
        count++
      }
  }
        return "specimen #1 and specimen#2 have {percent}% DNA in common";
     },
     willLikelySurvive(){
       var count = 0;
       for (var i = 0; i < dna.length; i++){
         if (dna[i] === "G" || dna[i] === "C"){
           count++
         }
       }
       if (count >= 9){
         batchSurvive.push(dna);
         return true
       } else {
         return false
       }
     }
  }
  };
  console.log(pAequorFactory(returnRandBase(1), mockUpStrand()));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  