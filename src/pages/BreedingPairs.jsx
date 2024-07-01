import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function BreedingPairs() {
  const [pairs, setPairs] = useState([]);
  const [newPair, setNewPair] = useState({ unicorn1: "", unicorn2: "", breedingDate: "" });

  const handleAddPair = () => {
    setPairs([...pairs, newPair]);
    setNewPair({ unicorn1: "", unicorn2: "", breedingDate: "" });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">Breeding Pairs</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Add New Pair</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4">
            <Input
              placeholder="Unicorn 1"
              value={newPair.unicorn1}
              onChange={(e) => setNewPair({ ...newPair, unicorn1: e.target.value })}
            />
            <Input
              placeholder="Unicorn 2"
              value={newPair.unicorn2}
              onChange={(e) => setNewPair({ ...newPair, unicorn2: e.target.value })}
            />
            <Input
              placeholder="Breeding Date"
              value={newPair.breedingDate}
              onChange={(e) => setNewPair({ ...newPair, breedingDate: e.target.value })}
            />
            <Button onClick={handleAddPair}>Add Pair</Button>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4">
        {pairs.map((pair, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{pair.unicorn1} & {pair.unicorn2}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Breeding Date: {pair.breedingDate}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default BreedingPairs;