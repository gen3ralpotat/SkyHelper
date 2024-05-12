import json

def format():
    day = 1
    shardType = {
        1: "strong",
        0: "regular"
    }
    realm = {
        0: "vault",
        1: "prairie",
        2: "forest",
        3: "valley",
        4: "wasteland"
    }
    rewards = {
        1: "ascended",
        0: "wax"
    }
    rewardsAmount = {
        1: "2",
        0: "200"
    }
    _ = ""
    with open("/home/gen3ralpotat/gen3ralpotat/coding/fun_stuff/sky_helper/SkyHelper/assets/data/shards.json", "r") as f:
        for line in f:
            if "\"day\"" in line:
                #line = line.replace("2", f"{rewardsAmount[day%2]}")
                _ = f"\"{day}\": {{".join(_.rsplit("{", 1))
                day += 1
            _ = _ + line
        print (_)
    with open("/home/gen3ralpotat/gen3ralpotat/coding/fun_stuff/sky_helper/SkyHelper/assets/data/shards.json", "w") as f:
        f.write(_)
        
def jsonFormat():
    day = 1
    startTimes = {
        1: ["07:48", "13:48", "19:48"],
        2: ["02:18", "10:18", "18:18"],
        3: ["02:28", "08:28", "14:28"],
        4: ["01:58", "09:58", "17:58"],
        5: ["03:38", "09:38", "15:38"],
        6: ["02:18", "10:18", "18:18"],
        7: ["07:48", "13:48", "19:48"],
        8: ["01:58", "09:58", "17:58"],
        9: ["02:28", "08:28", "14:28"],
        10: ["02:18", "10:18", "18:18"],
        11: ["03:38", "09:38", "15:38"],
        0: ["01:58", "09:58", "17:58"]
    }
    
    weekdaysExcluded = {
        1: [1,2],
        2: [0,1],
        3: [2,3],
        4: [0,6],
        5: [3,4],
        6: [0,1],
        7: [1,2],
        8: [0,6],
        9: [2,3],
        10:[0,1],
        11:[3,4],
        0: [0,6]
    }
    
    
    with open("/home/gen3ralpotat/gen3ralpotat/coding/fun_stuff/sky_helper/SkyHelper/assets/data/shards.json", "r+") as f:
        data = json.load(f)
        for i in range(31):
            #_ = data["shards"][i]["times"]["start"]
            #for j in range(3):
            #    time = _[j]
            #    hourInt = int(time[:2])
            #    hourInt += 4
            #    temp = data["shards"][i]["times"]["start"][j]
            #    data["shards"][i]["times"]["end"][j] = f"{hourInt:02d}:{temp[3:]}"
            data["shards"][i]["weekdaysExcluded"] = weekdaysExcluded[(i+1) % 12]
                
        newData = json.dumps(data, indent=4)
        
    print(newData)
    
    
    with open("/home/gen3ralpotat/gen3ralpotat/coding/fun_stuff/sky_helper/SkyHelper/assets/data/shards.json", "w") as f:
        f.write(newData)
    
if __name__ == "__main__":
    format()