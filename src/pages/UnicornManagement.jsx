import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function UnicornManagement() {
  const [unicorns, setUnicorns] = useState([]);
  const [newUnicorn, setNewUnicorn] = useState({ name: "", age: "", gender: "", lineage: "" });

  const handleAddUnicorn = () => {
    setUnicorns([...unicorns, newUnicorn]);
    setNewUnicorn({ name: "", age: "", gender: "", lineage: "" });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">Unicorn Management</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Add New Unicorn</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            <Input
              placeholder="Name"
              value={newUnicorn.name}
              onChange={(e) => setNewUnicorn({ ...newUnicorn, name: e.target.value })}
            />
            <Input
              placeholder="Age"
              value={newUnicorn.age}
              onChange={(e) => setNewUnicorn({ ...newUnicorn, age: e.target.value })}
            />
            <Input
              placeholder="Gender"
              value={newUnicorn.gender}
              onChange={(e) => setNewUnicorn({ ...newUnicorn, gender: e.target.value })}
            />
            <Input
              placeholder="Lineage"
              value={newUnicorn.lineage}
              onChange={(e) => setNewUnicorn({ ...newUnicorn, lineage: e.target.value })}
            />
            <Button onClick={handleAddUnicorn}>Add Unicorn</Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4">
        {unicorns.map((unicorn, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{unicorn.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Age: {unicorn.age}</p>
              <p>Gender: {unicorn.gender}</p>
              <p>Lineage: {unicorn.lineage}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default UnicornManagement;