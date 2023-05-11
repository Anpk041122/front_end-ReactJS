import React, { useEffect, useState } from 'react';
import { authAPI, endpoints } from '../configs/API';
import { Form } from 'react-bootstrap';
import '../style/medicineSelect.css';
import { RiDeleteBack2Line } from "react-icons/ri";


const MedicineSelect = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const loadMedicine = async () => {
      let res = await authAPI().get(endpoints['medicine']);
      setMedicines(res.data.results);
    };

    loadMedicine();
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsFocused(true);
  };

  const onBlured= (e) => {
    if(e.target.value === "")
      setIsFocused(false);
  }

  const hideMedicineDropdown = () => { 
    setIsFocused(false);
  }

  const handleSelect = (medicine) => { 
    setSearchTerm(medicine)
    setIsFocused(false);
  }

  const filterMedicine = medicines.filter((medicine) =>
    medicine.medicine_name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div id='container'>
      <Form.Control
        type="text"
        placeholder="Tìm kiếm thuốc..."
        value={searchTerm}
        onChange={handleInputChange}
        onBlur={onBlured}
      />
        {isFocused && <div id='list-medicine'>
          <span id='header-medicine'>Tìm thuốc</span><RiDeleteBack2Line onClick={hideMedicineDropdown} className='icon-medicine'/>
          {filterMedicine.map((medicine) => (
              <div key={medicine.id} id='item-medicine' 
                onClick={() => handleSelect(medicine.medicine_name)}
              >
                {medicine.medicine_name}
              </div>
            ))}
        </div>}
    </div>
  );
};

export default MedicineSelect;
