import os
import json
import time

print("The Current version is: " + json.load(open("ver.json"))["latest-version"])
ver = input("New version? ")
unix_time = time.time() * 1000
changelog = input("Comments? ")

json.dump({"latest-version": ver, "update-time-unix": unix_time, "changelog": changelog}, open("ver.json", "w"))
