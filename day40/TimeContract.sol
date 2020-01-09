pragma solidity ^0.5.1;

contract MyContract{

    uint256 public peopleCount=0;
    mapping(uint => Person) public people;
    
    
    uint256 openingTime =1578567666;
   
   
    
    modifier onlyWhileOpen(){
       require(block.timestamp >= openingTime);
       _;
    }   
    
    
    struct Person{
        uint _id;
        string _firstName;
        string _lastName;
        
    }

    
    function addPerson(
        string memory _firstName,
        string memory _lastName
        )
        public 
        onlyWhileOpen{
            
        incrementCount();
        people[peopleCount] = Person(peopleCount, _firstName,_lastName);
        
    }
    
    function incrementCount() internal{
           peopleCount+=1; 
        
    }
    
}
