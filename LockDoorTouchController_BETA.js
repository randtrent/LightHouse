#pragma strict

/*
  Basic Rotational Touch Controller for LightHouse.
  Developped by Trent Rand, December 16th, 2014.

  Current Beta as of January 7th, 2015.
*/


var spinSpeed = 10.0f; //Degrees per second.
var DoorA : GameObject;
var DoorForce = 10.0f;
var TopSpeed = 15.0f;
var DoorB : GameObject;
var WaterLeft : Transform;
var WaterRight : Transform;
var Open = false;

function Start () {

}

function Update () {
  for (var touch : Touch in Input.touches){
  		
  	if (touch.phase == TouchPhase.Began || touch.phase == TouchPhase.Moved) {
  	

        var ray = Camera.main.ScreenPointToRay(touch.position);
        var hit : RaycastHit;

          if (Physics.Raycast (ray, hit, 100)) {
            if (hit.collider.gameObject == DoorA || hit.collider.gameObject == DoorB) {
            	if (WaterLeft.position.y == WaterRight.position.y) {
            		if (Open == false) {
            	
            		DoorA.hingeJoint.motor.force = DoorForce;
					DoorA.hingeJoint.motor.targetVelocity = TopSpeed;
				
					DoorB.hingeJoint.motor.force = DoorForce;
					DoorB.hingeJoint.motor.targetVelocity = TopSpeed;
				
					Open = true;
						}
						
					else {
						
					DoorA.hingeJoint.motor.force = DoorForce;
					DoorA.hingeJoint.motor.targetVelocity = -TopSpeed;
				
					DoorB.hingeJoint.motor.force = DoorForce;
					DoorB.hingeJoint.motor.targetVelocity = -TopSpeed;
				
					Open = false;
				
						}
					}
 	         	}
			}
		}
	}
}