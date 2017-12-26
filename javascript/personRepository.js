var Persons[];

Persons[0]={    ID = "387387",
                Name = "doron",
                dateOfBirth = "01/01/1948",
                Email = "doronavr@gmail.com" } ;


function getPersons(){
    return Persons;
}

function Get(personID){
    var Persons = getPersons();
    for(i=0 ; i<Persons.length;i++){
        if (Persons[i].ID == personID){
            return Person[i];
        }
    }
    return null
}

function Add(person){
    var Persons=getPersons();
    var per=Get(person.ID);
    if (per==null){
        Persons.push(person);
        return true;
    }
    return false;
}

function Delete(personID){
    var Persons = getPersons;
    var person = Get(personID);
    if(person!=null){
        i = search_person(personID);
        Persons[i].Delete;
    }



    }
    return null;
}
