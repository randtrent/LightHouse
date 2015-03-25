#pragma strict

function Start () {

}


var Spinner : GameObject;
var Water : GameObject;
var WaterLower : Transform;
var WaterUpper : Transform;
var Speed = 0.5f;

function Update () {
	for (var touch : Touch in Input.touches) {
		
		var ray = Camera.main.ScreenPointToRay(touch.position);
		var hit : RaycastHit;
		
			if (Physics.Raycast (ray, hit, 100)) {
				
				if(hit.collider.gameObject == Spinner) {
					print("Hit Spinner");
					
					if (Water.transform.position.y == WaterLower.transform.position.y) {
					
					// var UpDistance = WaterUpper.transform.position.y - Water.transform.position.y;
					Water.transform.position = WaterUpper.position;
					}
					
					else {
					
					var DownDistance = Water.transform.position.y - WaterLower.transform.position.y;
					Water.transform.Translate(-Vector3.forward * DownDistance);
					}
				}
			}
		}		
	}