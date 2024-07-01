import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ActivityLog() {
  const [activities, setActivities] = useState([
    "New unicorn added: Sparkle",
    "Breeding pair created: Sparkle & Twinkle",
    "Breeding outcome: Success",
  ]);

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">Activity Log</h1>
      <div className="grid grid-cols-1 gap-4">
        {activities.map((activity, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Activity {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{activity}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ActivityLog;