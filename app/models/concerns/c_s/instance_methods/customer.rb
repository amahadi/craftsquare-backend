module CS
  module InstanceMethods
    module Customer

      extend ActiveSupport::Concern

      def current_address
        addresses.find_by(current: true)
      end
    end
  end
end