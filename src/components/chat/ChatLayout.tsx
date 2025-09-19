import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Search, 
  Plus, 
  Phone, 
  Video, 
  MoreHorizontal, 
  Settings,
  Paperclip,
  Smile,
  Send,
  BarChart,
  Layers,
  Package,
  Users,
  CreditCard,
  Bell,
  UserPlus,
  Pin,
  Image as ImageIcon,
  FileText,
  Link,
  Archive
} from "lucide-react";

interface ChatLayoutProps {
  user: any;
  onLogout: () => void;
}

export const ChatLayout = ({ user, onLogout }: ChatLayoutProps) => {
  const { theme, setTheme } = useTheme();
  const [selectedGroup, setSelectedGroup] = useState("marketing-team");
  const [message, setMessage] = useState("");

  // Mock data matching the reference images
  const groups = [
    {
      id: "design-team",
      name: "Design Team",
      lastMessage: "I will have a look today.",
      time: "1 min",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=design"
    },
    {
      id: "hr-dept",
      name: "Human Resource Department", 
      lastMessage: "I've just published the...",
      time: "2 mins",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hr"
    },
    {
      id: "campaigns",
      name: "Campaigns",
      lastMessage: "",
      time: "10 mins",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=campaigns"
    }
  ];

  const contacts = [
    {
      id: "jerome",
      name: "Jerome Bell",
      message: "Hello, how are you!",
      time: "Just Now",
      unread: 2,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jerome",
      online: true
    },
    {
      id: "guy",
      name: "Guy Hawkins", 
      message: "Thanks! Looks great!",
      time: "1 min",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=guy",
      online: true
    },
    {
      id: "marvin",
      name: "Marvin McKinney",
      message: "Can you find a house for...",
      time: "1 min",
      unread: 3,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marvin",
      online: false
    },
    {
      id: "darlene",
      name: "Darlene Robertson",
      message: "Sent me over the latest...",
      time: "3 mins",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=darlene",
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      user: "Brooklyn Simmons",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=brooklyn",
      time: "Thursday 5:22pm",
      type: "voice",
      duration: "15:00",
      reactions: ["😄", "❤️", "👍", "👏"]
    },
    {
      id: 2,
      user: "Jacob Jones",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jacob",
      time: "Friday 8:05am",
      message: "A creative brief is a short document that sums up marketing, advertising, or design project mission, goals, challenges, demographics, messaging, and other key details. It's often created by a marketing team but needs close input from a business owner or project manager. The goal of a brief is to achieve stakeholder alignment on a project before it begins.",
      reactions: []
    },
    {
      id: 3,
      user: "Wade Warren",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wade",
      time: "Friday 9:00am",
      message: "Sound Interesting!\n\nWhat should we do to start",
      reactions: []
    },
    {
      id: 4,
      user: "Cameron Williamson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cameron",
      time: "Friday 4:30pm",
      message: "Hello, how are you doing.\n\nWhy don't we go out somewhere?",
      reactions: ["😄", "❤️", "👍", "👏"]
    }
  ];

  const members = [
    { name: "Brooklyn Simmons", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=brooklyn" },
    { name: "Jacob Jones", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jacob" },
    { name: "Wade Warren", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wade" },
    { name: "Cameron Williamson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cameron" }
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <div className="w-80 bg-chat-sidebar border-r border-border flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-semibold">MantaUI</span>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search" 
              className="pl-10 bg-background border-border"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4 border-b border-border">
          <div className="text-xs font-medium text-muted-foreground mb-3">COMMON</div>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <BarChart className="w-4 h-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Layers className="w-4 h-4" />
              Layouts
            </Button>
          </div>
          
          <div className="text-xs font-medium text-muted-foreground mb-3 mt-6">MAIN MENU</div>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Package className="w-4 h-4" />
              Apps
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <BarChart className="w-4 h-4" />
              Reports
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Package className="w-4 h-4" />
              Products
            </Button>
          </div>
        </div>

        {/* Messages Section */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Messages</h3>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Create New Group
            </Button>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4 space-y-3">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-chat-message-hover cursor-pointer"
                >
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={contact.avatar} />
                      <AvatarFallback>{contact.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background ${
                      contact.online ? 'bg-chat-online' : 'bg-chat-offline'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm truncate">{contact.name}</h4>
                      <span className="text-xs text-muted-foreground">{contact.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{contact.message}</p>
                  </div>
                  {contact.unread && (
                    <Badge className="bg-primary hover:bg-primary text-primary-foreground text-xs">
                      {contact.unread}
                    </Badge>
                  )}
                </div>
              ))}
            </div>

            <Separator className="mx-4" />

            <div className="p-4">
              <h4 className="font-semibold mb-3">Groups</h4>
              <div className="space-y-3">
                {groups.map((group) => (
                  <div
                    key={group.id}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-chat-message-hover cursor-pointer"
                  >
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={group.avatar} />
                      <AvatarFallback>{group.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm truncate">{group.name}</h4>
                        <span className="text-xs text-muted-foreground">{group.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{group.lastMessage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=marketing" />
              <AvatarFallback>MT</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">Marketing Team</h2>
              <p className="text-sm text-muted-foreground">24 members</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Pin className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={msg.avatar} />
                  <AvatarFallback>{msg.user[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{msg.user}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  
                  {msg.type === 'voice' ? (
                    <div className="bg-chat-message-bg border border-border rounded-lg p-3 max-w-md">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                        </div>
                        <div className="flex-1">
                          <div className="w-full h-2 bg-muted rounded-full">
                            <div className="w-1/3 h-full bg-primary rounded-full" />
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{msg.duration}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-chat-message-bg border border-border rounded-lg p-3 max-w-2xl shadow-message">
                      <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                    </div>
                  )}
                  
                  {msg.reactions && msg.reactions.length > 0 && (
                    <div className="flex gap-1 mt-2">
                      {msg.reactions.map((reaction, idx) => (
                        <span key={idx} className="text-lg">{reaction}</span>
                      ))}
                      <Badge variant="secondary" className="text-xs">2</Badge>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Paperclip className="w-4 h-4" />
            </Button>
            <div className="flex-1 relative">
              <Input
                placeholder="Aa"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pr-12 bg-chat-input"
              />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                <Smile className="w-4 h-4" />
              </Button>
            </div>
            <Button size="icon" className="bg-primary hover:bg-primary/90">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-background border-l border-border flex flex-col">
        <div className="p-6">
          <div className="text-center mb-6">
            <Avatar className="w-20 h-20 mx-auto mb-3">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=marketing" />
              <AvatarFallback>MT</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-lg">Marketing Team</h3>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Pin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <UserPlus className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Members</h4>
                <Button variant="link" className="text-primary p-0 h-auto">View All</Button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {members.map((member, idx) => (
                  <div key={idx} className="text-center">
                    <Avatar className="w-12 h-12 mx-auto mb-1">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground truncate">{member.name.split(' ')[0]}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">24 members</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Images</h4>
                <Button variant="link" className="text-primary p-0 h-auto">View All</Button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-muted rounded-lg" />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Files</h4>
                <Button variant="link" className="text-primary p-0 h-auto">View All</Button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">642 TB-DSHN_0001.pdf</p>
                    <p className="text-xs text-muted-foreground">2.3MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Links</h4>
                <Button variant="link" className="text-primary p-0 h-auto">View All</Button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <Link className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Neuro Marketing: How brands are...</p>
                    <p className="text-xs text-muted-foreground">Youtube</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};