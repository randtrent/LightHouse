#pragma strict

/*
  Basic Rotational Touch Controller for LightHouse.
  Developped by Trent Rand, December 16th, 2014.

  Current Beta as of January 7th, 2015.
*/


var spinSpeed = 10.0f; //Degrees per second.
var Marker1 : GameObject;
var DoorForce = 10.0f;
var TopSpeed = 15.0f;
var Marker2 : GameObject;
var Open = false;

function Start () {

}

function Update () {
  for (var touch : Touch in Input.touches){
  		
  	if (touch.phase == TouchPhase.Began || touch.phase == TouchPhase.Moved) {
  	

        var ray = Camera.main.ScreenPointToRay(touch.position);
        var hit : RaycastHit;

          if (Physics.Raycast (ray, hit, 100)) {
            if (hit.collider.gameObject == Marker1 || hit.collider.gameObject == Marker2) {
            	if (Open == false) {
            	
            		Marker1.hingeJoint.motor.force = DoorForce;
					Marker1.hingeJoint.motor.targetVelocity = TopSpeed;
				
					Marker2.hingeJoint.motor.force = DoorForce;
					Marker2.hingeJoint.motor.targetVelocity = TopSpeed;
				
					Open = true;
						}
						
					else {
						
					Marker1.hingeJoint.motor.force = DoorForce;
					Marker1.hingeJoint.motor.targetVelocity = -TopSpeed;
				
					Marker2.hingeJoint.motor.force = DoorForce;
					Marker2.hingeJoint.motor.targetVelocity = -TopSpeed;
				
					Open = false;
				
						}
					}
 	         	}
			}
		}
	}