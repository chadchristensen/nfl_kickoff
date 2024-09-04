import { useEffect, useState } from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import gameData, { TeamData } from '../gameData';
import { Button } from './ui/button.tsx';
import { cn } from '@/lib/utils.ts';

type TypeaheadProps = {
  selectedTeam: TeamData | undefined;
  handleTeamChange: (teamCode: string) => void
}

export type TypeaheadResult = {
  teamCode: string;
  teamName: string;
  teamLogoUrl: string;
}

export default function Typeahead({ selectedTeam, handleTeamChange }: TypeaheadProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(selectedTeam?.team || '');

  useEffect(() => {
    setValue(selectedTeam?.team || '');
  }, [selectedTeam?.team])

  const teams = Object.entries(gameData)
    .map(([teamCode, teamInfo]) => (
      {
        teamCode,
        teamName: teamInfo.team,
        teamLogoUrl: teamInfo.teamLogoUrl
      }
    )).sort((a, b) => a.teamName.localeCompare(b.teamName));

  return (
    <div className='flex justify-center'>
      <div className='space-y-2 flex flex-col'>
        <label className='block text-sm font-medium leading-none' htmlFor='team-select'>Select a team</label>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={isOpen}
              id='team-select'
              className="w-[300px] justify-between"
            >
              {value
                ? <span className='flex gap-2 items-center'>
                  <img src={`${teams.find((team) => team.teamName === value)?.teamLogoUrl}`} className='h-6 aspect-auto' />
                  {value}
                </span>
                : "Select team..."}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search team..." />
              <CommandList>
                <CommandEmpty>No team found.</CommandEmpty>
                <CommandGroup>
                  {teams.map((team) => (
                    <CommandItem
                      key={team.teamCode}
                      value={team.teamName}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setIsOpen(false)
                        handleTeamChange(team.teamCode);
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === team.teamName ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <img
                        className="h-8 mr-2 aspect-square"
                        src={team.teamLogoUrl}
                        alt={team.teamName}
                      />
                      {team.teamName}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
